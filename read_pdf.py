import PyPDF2

try:
    with open('public/SpeedQueen_CaseStudy.pdf', 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        print("Pages:", len(reader.pages))
        for i in range(min(5, len(reader.pages))):
            text = reader.pages[i].extract_text()
            print(f"Page {i}:", text[:100])
except Exception as e:
    print("Error:", e)
