filepath = r"d:\tmp\antigraviti\cantardelama\caso1\src\app\page.tsx"
with open(filepath, "r", encoding="utf-8") as f:
    lines = f.readlines()

targets = ["reserva", "precios", "itinerario", "incluye", "sevilla", "guadalquivir", "eurostars", "maestranza"]

out = []
for idx, line in enumerate(lines):
    for t in targets:
        if t in line.lower():
            out.append(f"Line {idx+1}: {t} in: {line.strip()}")
            break

with open("results2.txt", "w", encoding="utf-8") as f_out:
    f_out.write("\n".join(out))

print("Wrote results2.txt")
