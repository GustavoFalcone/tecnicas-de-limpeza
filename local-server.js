const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT || 8097);
const host = process.env.HOST || "127.0.0.1";
const root = __dirname;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp"
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${host}:${port}`);
  const requestedPath = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  const filePath = path.normalize(path.join(root, requestedPath));

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      res.end("Arquivo não encontrado");
      return;
    }

    const type = types[path.extname(filePath).toLowerCase()] || "application/octet-stream";
    res.writeHead(200, { "content-type": type });
    res.end(data);
  });
});

server.listen(port, host, () => {
  console.log(`Kit Limpeza Profissional disponível em http://${host}:${port}/`);
});
