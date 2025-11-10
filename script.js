const form = document.getElementById("shortenForm");
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const url = document.getElementById("urlInput").value;

  const res = await fetch("/shorten", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ originalUrl: url })
  });

  const data = await res.json();
  result.innerHTML = `<a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a>`;
});
