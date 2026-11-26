import http.server
import ssl
import os

class CORSRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        return super().end_headers()

if __name__ == '__main__':
    # Check if certificates exist, if not generate them
    if not (os.path.exists('cert.pem') and os.path.exists('key.pem')):
        print("Generating SSL certificates...")
        import generate_cert
        generate_cert.generate_self_signed_cert()

    # Create the server
    server_address = ('localhost', 8000)
    httpd = http.server.HTTPServer(server_address, CORSRequestHandler)
    
    # Configure SSL
    context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    context.load_cert_chain('cert.pem', 'key.pem')
    httpd.socket = context.wrap_socket(httpd.socket, server_side=True)
    
    print("Server running on https://localhost:8000")
    httpd.serve_forever() 