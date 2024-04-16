import subprocess

def convert_step_to_stl(input_file, output_file):
    # Utilise FreeCAD en ligne de commande pour convertir le fichier .step en .stl
    command = f"FreeCADCmd --console-mode --run 'import Part; Part.open(\"{input_file}\").Mesh().write(\"{output_file}\")'"
    subprocess.run(command, shell=True)

    print(f"Conversion réussie. Fichier .stl enregistré sous '{output_file}'.")

if __name__ == "__main__":
    input_file = "/Users/tometournay/Desktop/Manipulation 3D/3D/con.STEP"
    output_file = "3D/con.STL"
    convert_step_to_stl(input_file, output_file)
