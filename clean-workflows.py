import json
import os

# Ruta de la carpeta que contiene los archivos JSON
folder_path = "workflows"

# Asegurarse de que la carpeta existe
if not os.path.exists(folder_path):
    print(f"La carpeta {folder_path} no existe.")
    exit(1)

# Procesar cada archivo JSON en la carpeta
for filename in os.listdir(folder_path):
    if filename.endswith(".json"):
        file_path = os.path.join(folder_path, filename)

        # Leer el archivo JSON
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                data = json.load(file)

            # Crear un nuevo diccionario con las propiedades solicitadas
            filtered_data = {
                "name": data.get("name"),
                "nodes": data.get("nodes"),
                "connections": data.get("connections"),
                "settings": {
                    "executionOrder": data.get("settings", {}).get("executionOrder")
                }
            }

            # Reemplazar el archivo original con el JSON filtrado
            with open(file_path, 'w', encoding='utf-8') as file:
                json.dump(filtered_data, file, indent=2)

            print(f"Procesado y reemplazado: {filename}")

        except Exception as e:
            print(f"Error al procesar {filename}: {str(e)}")

print("Procesamiento completado.")
