#!/usr/bin/env python3
"""
Servidor de desenvolvimento para a Calculadora de Reajuste Salarial
Execute com: python server.py
"""

import http.server
import socketserver
import webbrowser
import os
import sys
from pathlib import Path

# Configurações
PORT = 8000
HOST = 'localhost'

class CORSRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Handler que adiciona headers CORS para desenvolvimento"""
    
    def end_headers(self):
        # Adicionar headers CORS
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        
        # Headers para PWA
        self.send_header('Service-Worker-Allowed', '/')
        
        # Headers de segurança básicos
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'DENY')
        
        super().end_headers()
    
    def do_OPTIONS(self):
        """Responder a requisições OPTIONS (preflight)"""
        self.send_response(200)
        self.end_headers()
    
    def do_GET(self):
        """Override para melhor logging"""
        print(f"📡 {self.command} {self.path}")
        return super().do_GET()

def main():
    """Função principal do servidor"""
    
    # Verificar se estamos no diretório correto
    if not os.path.exists('index.html'):
        print("❌ Erro: index.html não encontrado!")
        print("🔍 Certifique-se de estar no diretório correto do projeto")
        print("📁 Diretório atual:", os.getcwd())
        sys.exit(1)
    
    # Configurar o servidor
    os.chdir(Path(__file__).parent)
    
    try:
        with socketserver.TCPServer((HOST, PORT), CORSRequestHandler) as httpd:
            print("🚀 Servidor de Desenvolvimento Iniciado!")
            print("=" * 50)
            print(f"🌐 URL Local: http://{HOST}:{PORT}")
            print(f"📱 URL Rede: http://{get_local_ip()}:{PORT}")
            print("=" * 50)
            print("📋 Recursos disponíveis:")
            print("  • Calculadora de Reajuste Salarial")
            print("  • Progressive Web App (PWA)")
            print("  • Service Worker para cache offline")
            print("  • APIs em tempo real do Banco Central")
            print("=" * 50)
            print("💡 Dicas:")
            print("  • Teste em dispositivos móveis usando a URL de rede")
            print("  • Use Ctrl+C para parar o servidor")
            print("  • Ative o modo desenvolvedor no navegador para debug")
            print("=" * 50)
            
            # Abrir navegador automaticamente
            try:
                webbrowser.open(f'http://{HOST}:{PORT}')
                print("🌍 Navegador aberto automaticamente")
            except:
                print("⚠️  Não foi possível abrir o navegador automaticamente")
            
            print(f"\n🔄 Servidor rodando na porta {PORT}...")
            print("📊 Logs de requisições:")
            print("-" * 30)
            
            # Iniciar o servidor
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n\n🛑 Servidor interrompido pelo usuário")
        print("✅ Shutdown limpo realizado")
        
    except OSError as e:
        if e.errno == 98:  # Address already in use
            print(f"❌ Erro: Porta {PORT} já está em uso!")
            print("💡 Tente usar outra porta ou pare o processo existente")
            print(f"🔧 Exemplo: python server.py --port 8001")
        else:
            print(f"❌ Erro do sistema: {e}")
        sys.exit(1)
        
    except Exception as e:
        print(f"❌ Erro inesperado: {e}")
        sys.exit(1)

def get_local_ip():
    """Obter IP local para acesso via rede"""
    import socket
    try:
        # Conectar a um endereço externo para descobrir IP local
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            s.connect(("8.8.8.8", 80))
            return s.getsockname()[0]
    except:
        return "localhost"

if __name__ == "__main__":
    # Verificar argumentos da linha de comando
    if len(sys.argv) > 1:
        if '--port' in sys.argv:
            try:
                port_index = sys.argv.index('--port') + 1
                PORT = int(sys.argv[port_index])
            except (ValueError, IndexError):
                print("❌ Erro: Porta inválida")
                print("💡 Uso: python server.py --port 8001")
                sys.exit(1)
        elif '--help' in sys.argv or '-h' in sys.argv:
            print("🚀 Servidor de Desenvolvimento - Calculadora de Reajuste")
            print("=" * 50)
            print("Uso: python server.py [opções]")
            print("")
            print("Opções:")
            print("  --port PORT    Especificar porta (padrão: 8000)")
            print("  --help, -h     Mostrar esta ajuda")
            print("")
            print("Exemplos:")
            print("  python server.py")
            print("  python server.py --port 3000")
            sys.exit(0)
    
    main()
