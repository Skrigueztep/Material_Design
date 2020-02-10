# Self-Signed SSL Certificades Generation

## Private key generation
    openssl genrsa -aes256 -out server.key 2048
## Certificate Signin Request generation
    openssl req -new -key server.key -sha256 -out server.csr
## 
    openssl x509 -req -days 365 -in server.csr -signkey server.key -sha256 -out server.crt
