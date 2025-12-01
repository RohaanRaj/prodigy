const certificateData = {
  "pit/may25/10206": {
    cin: "PIT/MAY25/10206",
    name: "Karthikeya Adula",
    track: "Machine Learning",
    college: "Matrusri Engineering College",
    lor: "Yes",
    start: "15/05/2025",
    end: "15/06/2025",
    issue: "16/06/2025",
  },
  "pit/may25/11647": {
    cin: "PIT/MAY25/11647",
    name: "Rohan Raj",
    track: "Android Development",
    college: "Matrusri Engineering College",
    lor: "Yes",
    start: "15/05/2025",
    end: "15/06/2025",
    issue: "16/06/2025",
  },
  "pit/may25/11064": {
    cin: "PIT/MAY25/11064",
    name: "V SAI GAUTHAM REDDY",
    track: "Cyber Security",
    college: "Matrusri Engineering College",
    lor: "Yes",
    start: "15/05/2025",
    end: "15/06/2025",
    issue: "16/06/2025",
  },
  "pit/may25/11519": {
    cin: "PIT/MAY25/11519",
    name: "RITVIK KODE",
    track: "Generative AI",
    college: "Matrusri Engineering College",
    lor: "Yes",
    start: "15/05/2025",
    end: "15/06/2025",
    issue: "16/06/2025",
  },
};

const params = new URLSearchParams(window.location.search);
const cinParam = params.get("cin");

const domainMapping = {
  "dev.prodigyinfotech.duckdns.org": "pit/may25/11519", // Ritvik
  "dev1.prodigyinfotech.duckdns.org": "pit/may25/11064", // Gautham
  "dev2.prodigyinfotech.duckdns.org": "pit/may25/11647", // Rohan
  "localhost:9001": "pit/may25/11519",
  "localhost:9002": "pit/may25/11064",
  "localhost:9003": "pit/may25/11647",
  "127.0.0.1:9001": "pit/may25/11519",
  "127.0.0.1:9002": "pit/may25/11064",
  "127.0.0.1:9003": "pit/may25/11647",
};

function populateCertificate(data) {
  document.getElementById("cin").textContent = data.cin;
  document.getElementById("name").textContent = data.name;
  document.getElementById("track").textContent = data.track;
  document.getElementById("college").textContent = data.college;
  document.getElementById("lor").textContent = data.lor;
  document.getElementById("start").textContent = data.start;
  document.getElementById("end").textContent = data.end;
  document.getElementById("issue").textContent = data.issue;
}

const resolveCin = () => {
  if (cinParam) {
    return cinParam.toLowerCase();
  }

  const hostname = window.location.hostname.toLowerCase();
  const hostWithPort = `${hostname}:${window.location.port}`;

  return domainMapping[hostWithPort] || domainMapping[hostname];
};

const mappingCin = resolveCin();
const defaultCin = "pit/may25/10206";

let selectedCin = null;

if (cinParam) {
  const normalized = cinParam.toLowerCase();
  if (certificateData[normalized]) {
    selectedCin = normalized;
  } else {
    document.querySelector(".card h2").textContent = "Certificate not found";
    document.querySelector("dl").innerHTML =
      '<p class="not-found">We could not match that CIN. Please confirm the value and try again.</p>';
    selectedCin = null;
  }
} else if (mappingCin && certificateData[mappingCin]) {
  selectedCin = mappingCin;
} else {
  selectedCin = defaultCin;
}

if (selectedCin) {
  populateCertificate(certificateData[selectedCin]);
}

const scrollButton = document.getElementById("scrollTop");
const toggleScrollButton = () => {
  if (window.scrollY > 300) {
    scrollButton.classList.add("visible");
  } else {
    scrollButton.classList.remove("visible");
  }
};

scrollButton.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);
window.addEventListener("scroll", toggleScrollButton);
toggleScrollButton();

