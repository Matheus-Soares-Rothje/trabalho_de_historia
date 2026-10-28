#!/usr/bin/env python3
"""Baixa as fotos da apresentação (Wikimedia Commons) para src/img/.
Uso: python3 baixar_imagens.py   (precisa de internet; rode uma vez e depois publique)"""
import os,time,urllib.request,urllib.parse
FOTOS={
 "capa": "NASA-Apollo8-Dec24-Earthrise.jpg",
 "linha-do-tempo": "Checkpoint_Charlie_-_Flickr_-_The_Central_Intelligence_Agency.jpg",
 "esporte": "Garrincha_1962.jpg",
 "copa70": "Brazil_1970.JPG",
 "politica": "John_F._Kennedy,_White_House_color_photo_portrait.jpg",
 "economia": "Construção_do_Congresso_Nacional_Esplanada_dos_Ministérios_1959-10_(cropped).jpg",
 "tecnologia": "Buzz_salutes_the_U.S._Flag.jpg",
 "musica": "The_Beatles_members_at_New_York_City_in_1964.jpg",
 "cinema": "Alfred_Hitchcock_NYWTS.jpg",
 "legado": "Civil_rights_march_on_Washington_Lincoln_Memorial.jpg"
}
UA="Anos60Apresentacao/1.0 (trabalho escolar)"
os.makedirs("src/img",exist_ok=True)
for nome,arq in FOTOS.items():
    dest=f"src/img/{nome}.jpg"
    if os.path.exists(dest) and os.path.getsize(dest)>1000:
        print("ok (já existe)",dest);continue
    url="https://commons.wikimedia.org/wiki/Special:FilePath/"+urllib.parse.quote(arq)+"?width=960"
    for tentativa in range(4):
        try:
            req=urllib.request.Request(url,headers={"User-Agent":UA})
            with urllib.request.urlopen(req,timeout=40) as r,open(dest,"wb") as f:f.write(r.read())
            print("baixada",dest);break
        except Exception as e:
            print("erro",nome,e);time.sleep(3*(tentativa+1))
    time.sleep(1)
print("Pronto! Confira se existem 10 arquivos em src/img/")
