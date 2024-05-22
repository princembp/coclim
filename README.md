
# Projecte  ![Reference Image](/images/logo_whitesvg.svg)
### 1. **Tema/motivació.**
<u>Objectius:</u>
+ Desenvolupar i implementar una pàgina web que serveixi com a plataforma per al **servidor climàtic** dedicat a la **gestió del risc d'inundació** en el Vendrell.

+    Oferir als usuaris públics i privats **informació clara i accessible** sobre les àrees amb diferents nivells de risc d'inundació, per poder respondre millor a aquestes amenaces.

<u>Motivació:</u>

    La motivació per crear la pàgina web sobre aquest tema sorgeix de l'assignatura de Projecte 5, on vam elaborar una sèrie d'indicadors i un mapa final. 

    La finalitat era comunicar el servidor climàtic amb alguna plataforma, i com que no havíem fet l'assignatura d'eines web abans, vam fer la comunicació a partir de plantilles. Així doncs, se m'ha presentat l'oportunitat d'aprofitar el treball fet al primer quadrimestre i plasmar-lo en aquest projecte.

### 2. **Dades/continguts.**
El contingut del **text** s'ha extret principalment del  "[Document PDF Projecte NOÉ](https://drive.google.com/file/d/1GT2N6lghaGxA4k6ZcLhOg9EI_Dvn5J11/view?usp=drive_link)"

Font de les fotos:
+ Inici:
    
    [_Catalunyaturisme_](https://catalunyaturisme.cat/es/el-vendrell/)

    [_Diari de Tarragona_](https://www.diaridetarragona.com/costa/pueden-remar-por-las-calles-pero-coma-ruga-no-esta-en-la-lista-de-zonas-inundables-20181101-0036-DRDT201811010036)

    [_Canva_](https://www.canva.com/) 

+ Qui som: 

    [_Canva_](https://www.canva.com/)

    _Elaboració pròpia_

+ Descripció del projecte:

    _Elaboració pròpia_

### 3. **Estructura de la Web.**
+ Inici
+ Qui som
+ Descripció del projecte
+ Mapa
+ Contacte
### 4. **Web responsive.**
Per a crear la meva pàgina web, vaig seguir una estratègia de **disseny mobile first**, vaig dissenyar inicialment la versió per a dispositius mòbils i després vaig adaptar el disseny per a pantalles més grans mitjançant **CSS Media Queries:**

```css
/*footer*/
.pie-pag .grupo-1 .box figure{
    display: flex;
    justify-content: center;
}

.pie-pag .grupo-1 .box h2{
    color: white;
    margin-bottom: 25px;
    font-size: 20px;
    margin-top: 50px;
}

.pie-pag .grupo-1{
    padding: 35px 0px;
}
```
![Reference Image](/images/footer1.png)
```css
/*Canvia el layout del footer*/
@media (min-width: 720px)
    .pie-pag .grupo-1{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 10px 0px;   
    }
```
![Reference Image](/images/footer.png)
### 5. **Cartografia.**

El mapa que apareix a la web es va elaborar prèviament a l'assignatura de projecte 5. La **capa de risc d'inundació** es va generar mitjançant la **Superposició ponderada** de tres capes: 
+ Usos del sòl. 
+ Renda econòmica. 
+ Equipament-accessibilitat.

Integració del mapa a la página web:

1. Instal·lar el complement de qgis2web.
1. Elaborar el mapa al QGIS.
1. Obrir la pestanya de Web -> qgis2web -> Crear mapa web.

![Reference Image](/images/qgis2map.png)
### 6. **Dificultats/millores.**
Dificultats:

Vaig experimentar un problema específic amb el mapa, ja que no s'ajustava correctament quan el col·locava en el format de telèfon. En ajustar les mesures de width i height, acabava afectant la mida del mapa tant en dispositius petits com en grans. Al final, vaig poder **solucionar** el problema fent el **template: pantalla completa i el Extent: Ajustar a l'extensió de les capes**.

Millores:
Penso que es poden fer moltes millores en la pàgina web, entre altres:
+ Afegir Media Queries per a dispositius de grandària 768px (tauleta).

+ Afegir més membres d'equips.

+ Afegir més informació en els pop ups.