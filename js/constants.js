const mainURL = "http://localhost:3000";
const PROJECTS_TO_BE_SHOWN = 6;
const PROJECTS_TO_BE_SHOWN_ON_HOME = 5;
const CREATIVE_IMAGES_TO_BE_SHOWN = 9;
const THIS_WEEK = 7;
const THIS_MONTH = 30;
const THIS_PAST_6_MONTH = 182;
const THIS_YEAR = 365;
const SUBJECT_MAX_LENGTH = 70;
const MESSAGE_MAX_LENGTH = 300;

let copyright = document.querySelector('.copyright-part');
if(!!copyright)
    copyright.innerHTML = `@ ${new Date().getFullYear()} All Rights Reserved JK PEINTURE SÀRL`;

const isotopeFilter = (registeredDate) => dayjs().diff(registeredDate, 'day');

function countChars(countfrom, displayto, elemName) {
    const len = document.getElementById(countfrom).value.length;
    const displayTo = document.getElementById(displayto);
    if(elemName == 'inputLength')
        displayTo.innerHTML = `${len}/${SUBJECT_MAX_LENGTH}`;
    else
        displayTo.innerHTML = `${len}/${MESSAGE_MAX_LENGTH}`;
    if(len == 0)
        displayTo.style.borderColor = "var(--red-color)";
    else
        displayTo.style.borderColor = "var(--green-color)";
}

const validateBlogTitle = (title) => {
    return !!title && String(title)
        .match(
            /^[a-zA-Z0-9ßüÜöÖäÄ ]*$/
        )
}

const validateMessage = (message) => {
    return !!message && String(message)
        .match(
            /^[\.a-zA-Z0-9ßüÜöÖäÄ,!? ]*$/
        )
}

const validateSubject = (subject) => {
    return !!subject && String(subject)
        .match(
            /^[a-zA-ZßüÜöÖäÄ ]*$/
        )
}

const validateFullName = (fullName) => {
    return String(fullName)
        .match(
            /^[a-zA-ZßüÜöÖäÄ]+ [a-zA-ZßüÜöÖäÄ]+$/
        );
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validateGermanPhoneNumber = (phoneNumber) => {
    return String(phoneNumber)
        .match(
            // /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/
            /^([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/
            // \(void\)
        )
}

const customDateFormat = (dateString) => {
    let date = new Date(dateString);
    let dateArr = date.toDateString().split(" ");
    let newFormat = dateArr[2] + " " + dateArr[1] + " " + dateArr[3];
    return newFormat;
}

const showMore = (tagClassName, toBeShown, totalLength, imagesOnRowSize) => {  
    console.log("showMoreImagesOnRowSize:/ " + imagesOnRowSize);
    const blogItemClass = document.querySelectorAll(`.${tagClassName}`);
    click++;
    // console.log(click)
    let ctoBeShown = click * toBeShown;
    for (let i = ctoBeShown; i < (blogItemClass.length > ctoBeShown + toBeShown ? ctoBeShown + toBeShown : blogItemClass.length); i++) {
        // console.log(click)
        let blogItem = blogItemClass[i];
        console.log(blogItemClass.length)
        blogItem.style.display = "";
    }
    // click++; // 1     2    3
                // cits cits cits
    if(toBeShown == CREATIVE_IMAGES_TO_BE_SHOWN) {
        let totalImg = imagesOnRowSize;
        console.log(totalImg);
        let click_citbs = (click + 1) * CREATIVE_IMAGES_TO_BE_SHOWN
        let calculateHeight; // cits + cits + cits
        const creative_four_col_work_div = document.getElementById('creative-four-col-work');
        if (blogItemClass.length > click_citbs)
            if(click_citbs % imagesOnRowSize != 0) 
                calculateHeight =  parseInt(click_citbs / imagesOnRowSize) * 195 + 195;
            else
                calculateHeight =  parseInt((click_citbs - imagesOnRowSize) / imagesOnRowSize) * 195 + 195;
        else
            if (blogItemClass.length % imagesOnRowSize == 0)
                calculateHeight =  parseInt((blogItemClass.length - 1) / imagesOnRowSize) * 195 + 195;
            else
                calculateHeight =  parseInt((blogItemClass.length) / imagesOnRowSize) * 195 + 195;
        creative_four_col_work_div.setAttribute("style", `position: relative; height: ${calculateHeight}px;`)
        if(ctoBeShown + toBeShown >= totalLength) {
            document.getElementById('more-less-btn').style.display = "none";
            document.getElementById('portfolio-filter-ultop').style.display = "";
            document.getElementById('portfolio-filter-ulbottom').style.display = "";
        }
    }
    if(ctoBeShown + toBeShown >= totalLength)
        document.getElementById('more-less-btn').style.display = "none";
}
const checkMediaQueryImagesSize = () => {
    if(window.innerWidth > 1200) {
        return 4;
    } else if(window.innerWidth > 992) {
        return 3;
    } else if(window.innerWidth > 768) {
        return 2;
    } else {
        return 1;
    }
}

const _elementAppendChild = (parentElement, childElement) => {
    parentElement.appendChild(childElement);
}

const createElementItem = (_element, attributeObj, textNode) => {
    let item_element = document.createElement(_element);
    document.body.appendChild(item_element);
    if(!!attributeObj) {
        for (let i = 0; i < attributeObj?._attribute.length; i++) {
            item_element.setAttribute(attributeObj?._attribute[i], attributeObj?._attributeContent[i]);
        }
    }
    if(textNode) {
        item_element.appendChild(document.createTextNode(textNode));
    }
    
    return item_element;
}

const circleProgress = (className, progressObj) => {
    // console.log(progressObj)
    if (className[0] == '.') 
        className = className.replace(".", "");
    for (const progressKey in progressObj) {
        if (Object.hasOwnProperty.call(progressObj, progressKey)) {
            const singleProgress = progressObj[progressKey];
            $(`.${className}.circle.${progressKey}`).circleProgress({
                value: parseInt(singleProgress) / 100
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(parseInt(parseInt(singleProgress) * progress) + '<i>%</i>');
            })
        }
    }
    // $(`.${className}.circle`).circleProgress({
    //     value: (value / 100)
    // }).on('circle-animation-progress', function(event, progress) {
    //     $(this).find(' > strong').html(parseInt(value * progress) + '<i>%</i>');
    // })
}

const createListingEffectElement = (differenceInDates) => {
    let element_item;
    if (differenceInDates <= THIS_WEEK)
        element_item = createElementItem("div", {_attribute: ["class"], _attributeContent: ["grid-item listing-effect illustration VectorDesign Photography webdesign"]})
    else if (differenceInDates <= THIS_MONTH)
        element_item = createElementItem("div", {_attribute: ["class"], _attributeContent: ["grid-item listing-effect illustration VectorDesign Photography"]})
    else if (differenceInDates <= THIS_PAST_6_MONTH)
        element_item = createElementItem("div", {_attribute: ["class"], _attributeContent: ["grid-item listing-effect illustration VectorDesign"]})
    else if (differenceInDates <= THIS_YEAR)
        element_item = createElementItem("div", {_attribute: ["class"], _attributeContent: ["grid-item listing-effect illustration"]})
    else
        element_item = createElementItem("div", {_attribute: ["class"], _attributeContent: ["grid-item listing-effect"]})
    return element_item;
}

const addPhotos = ({ project, length}) => {
    let arr = []
    for (let i = 0; i < length; i++) {
        arr.push({
            "contentType": "image/jpeg",
            "path": `./image/Projekti${project}/Projekti${project}${i + 1}.jpeg`
        })
    }
    return arr
}

const blogsData = [
    {
      "title": "PROJET 1: PEINTURE INTÉRIEURE",
      "image": addPhotos({project: 1, length: 4}),
      "alt": "PEINTURE INTÉRIEURE",
      "description": "Projet Intérieur : met en valeur une transformation époustouflante réalisée grâce à nos services d’expertise en Façades Intérieures. Chaque espace a été méticuleusement conçu et réalisé pour améliorer à la fois l'attrait esthétique et l'utilité pratique de l'environnement. Caractéristiques Clés Mises en Avant dans les Photos: Excellence du Design Sur-Mesure : Les designs sur-mesure présentés dans les images reflètent une harmonie entre les styles modernes et classiques, adaptés au caractère unique de chaque pièce. Utilisation de Matériaux de Qualité Supérieure: Remarquez les textures riches et les finitions obtenues grâce à des matériaux de haute qualité, contribuant à la durabilité et à l'apparence raffinée des façades. Artisanat Innovant: La précision et la créativité de chaque façade sont évidentes, avec des détails complexes qui apportent profondeur et sophistication aux intérieurs. Intégration Architecturale Parfaite: Les façades complètent parfaitement les éléments architecturaux existants, créant une fluidité harmonieuse dans les espaces. Esthétique Fonctionnelle : Au-delà de la beauté, les designs améliorent également la fonctionnalité, avec des caractéristiques qui optimisent l'éclairage, l'acoustique et la dynamique spatiale. Conception Durable: Des matériaux et des pratiques écologiques sont discrètement intégrés, reflétant un engagement envers la durabilité sans compromettre le style.",
      "_id": "1",
      "registeredDate": "2024-04-05T12:00:00Z"
    },
    {
      "title": "PROJET 2: RÉNOVATION DE FAÇADE D'UNE MAISON",
      "image": addPhotos({project: 2, length: 12}),
      "alt": "RÉNOVATION DE FAÇADE D'UNE MAISON",
      "description": "Ce projet met en avant la rénovation complète de la façade extérieure d'une maison, avec l'installation d'un cadre squelettique pour soutenir le processus de plâtrage. La rénovation améliore non seulement l'attrait esthétique de la propriété, mais assure également l'intégrité structurelle et la longévité. Caractéristiques Clés: Installation du Cadre Squelettique : Un cadre robuste a été méticuleusement installé pour offrir une base stable pour l'application du plâtre, garantissant une finition lisse et uniforme. Plâtrage de Haute Qualité: La façade a été soigneusement plâtrée avec des matériaux de première qualité, aboutissant à un extérieur durable et résistant aux intempéries. Esthétique Moderne: Le design intègre des éléments contemporains qui rafraîchissent l'apparence de la maison tout en conservant son caractère. Amélioration de l'Isolation: La rénovation comprenait des améliorations de l'isolation de la façade, contribuant à une meilleure efficacité énergétique et à un confort intérieur accru. Attention aux Détails: Chaque aspect de la façade a été réalisé avec précision, de l'installation du cadre à la dernière couche de peinture, garantissant une finition impeccable.",
      "_id": "2",
      "registeredDate": "2024-05-14T15:00:00Z"
    },
    {
      "title": "PROJET 3: INSTALLATION DE ÉCHAFAUDAGES ET TRAVAUX EXTÉRIEURS",
      "image": addPhotos({project: 3, length: 7}),
      "alt": "INSTALLATION DE ÉCHAFAUDAGES ET TRAVAUX EXTÉRIEURS",
      "description": "Ce projet consiste en l'installation précise de échafaudages pour faciliter les travaux extérieurs du bâtiment de manière sûre et efficace. Notre équipe veille à ce que la structure du échafaudages soit installée en toute sécurité, offrant un accès complet à tous les niveaux de l'extérieur du bâtiment. Par la suite, des travaux extérieurs tels que le plâtrage, la peinture et les finitions seront réalisés avec une attention minutieuse aux détails. Caractéristiques Clés: Installation du Scaffolding: Le échafaudages est placé stratégiquement pour soutenir l'équipe tout en garantissant la sécurité pendant l'exécution des travaux extérieurs. Accès Efficace: Le échafaudages assure un accès facile à toutes les zones du bâtiment, permettant à l'équipe d'effectuer les tâches avec aisance et précision. Travaux Extérieurs de Haute Qualité: Une fois le échafaudages en place, notre équipe effectuera des travaux de plâtrage, de peinture et d'autres travaux extérieurs pour améliorer l'apparence et la durabilité du bâtiment. Sécurité Avant Tout: Tout au long du processus, la sécurité est notre priorité absolue, avec des protocoles de sécurité en place pour l'équipe et l'environnement du bâtiment.",
      "_id": "3",
      "registeredDate": "2024-06-23T09:30:00Z"
    },
    {
      "title": "PROJET 4: RÉNOVATION DE LA FAÇADE ET DES FENÊTRES EXTÉRIEURES",
      "image": addPhotos({project: 4, length: 9}),
      "alt": "RÉNOVATION DE LA FAÇADE ET DES FENÊTRES EXTÉRIEURES",
      "description": "Ce projet se concentre sur la rénovation complète de la façade et des fenêtres extérieures du bâtiment. L'objectif est d'améliorer l'attrait visuel, la fonctionnalité et l'efficacité énergétique de la propriété. Les travaux comprennent le retrait des anciens matériaux, la réparation des problèmes structurels, et l'installation de nouvelles fenêtres de haute qualité qui complètent la façade modernisée. Caractéristiques Clés: Rénovation de la Façade: La façade extérieure est soigneusement restaurée, en mettant l'accent sur les améliorations esthétiques et l'intégrité structurelle, garantissant une apparence fraîche et moderne. Remplacement des Fenêtres: Les anciennes fenêtres sont remplacées par des unités performantes et écoénergétiques qui offrent une meilleure isolation et réduction du bruit. Efficacité Énergétique Améliorée: Les nouvelles fenêtres et matériaux de façade sont choisis pour améliorer l'isolation thermique, contribuant ainsi à une meilleure conservation de l'énergie et à des économies sur les coûts énergétiques. Amélioration de l'Appel Visuel: La façade mise à jour et les fenêtres améliorent considérablement l'apparence extérieure du bâtiment, lui donnant un aspect plus contemporain et soigné. Artisanat Expert: Chaque détail de la rénovation est pris en charge par des professionnels qualifiés, garantissant que le résultat final dépasse les attentes en termes de forme et de fonction.",
      "_id": "4",
      "registeredDate": "2024-07-01T09:30:00Z"
    },
    {
      "title": "PROJET 5: RESTAURATION DE FAÇADE AVEC INSTALLATION DE SCAFFOLDING ET PRÉCISION ÉLEVÉE",
      "image": addPhotos({project: 5, length: 10}),
      "alt": "RESTAURATION DE FAÇADE AVEC INSTALLATION DE SCAFFOLDING ET PRÉCISION ÉLEVÉE",
      "description": "Ce projet implique la restauration méticuleuse de la façade du bâtiment, réalisée avec le plus haut niveau de précision et l'installation stratégique de échafaudages pour assurer un accès sûr et efficace à toutes les zones. Les travaux comprennent la préparation détaillée des surfaces, la réparation des imperfections structurelles et l'application de finitions de haute qualité pour rajeunir l'apparence et l'intégrité de la façade. Éléments Clés: Installation de Scaffolding : Le échafaudages est soigneusement conçu et érigé en toute sécurité, offrant un accès complet à la façade, permettant des travaux détaillés à chaque niveau tout en garantissant la sécurité de l'équipe et des environs. Préparation des Surfaces: Les surfaces existantes de la façade sont soigneusement nettoyées, les anciennes peintures et débris sont enlevés, et toutes les fissures ou dommages sont réparés avec soin pour créer une base lisse pour les nouvelles finitions. Travail de Précision: Chaque étape de la restauration est réalisée avec une attention rigoureuse aux détails, de l'alignement des éléments architecturaux à l'application de revêtements précis, garantissant une finition impeccable. Matériaux de Haute Qualité: Des matériaux de première qualité sont utilisés pour toutes les réparations et finitions, choisis pour leur durabilité et leur capacité à résister aux conditions environnementales, améliorant la longévité de la façade. Finitions Finales: Le projet se conclut par l'application de revêtements spécialisés et de couches protectrices qui non seulement améliorent l'attrait esthétique mais offrent également une protection à long terme contre les intempéries et l'usure. Ce projet de restauration de façade illustre un engagement envers la qualité et la précision, transformant l'extérieur du bâtiment en une structure revitalisée et durable.",
      "_id": "5",
      "registeredDate": "2024-07-27T09:30:00Z"
    },
    {
      "title": "PROJET 6: ÉCHAFAUDAGES ET FAÇADE MIXTE INTÉGRÉE",
      "image": addPhotos({project: 6, length: 3}),
      "alt": "ÉCHAFAUDAGES ET FAÇADE MIXTE INTÉGRÉE",
      "description": "Ce projet englobe une approche globale à la fois pour l'installation de échafaudages et la restauration de façade, fusionnant ces éléments pour garantir une exécution sans faille. L'accent est mis sur la création d'un résultat sûr, efficace et esthétiquement agréable qui répond aux besoins structurels et visuels du bâtiment. Aspects Clés: Installation de Scaffolding : Des systèmes de échafaudages robustes sont stratégiquement érigés pour offrir un accès sécurisé aux ouvriers, garantissant que toutes les zones de la façade sont accessibles pour une restauration complète. Restauration de Façade: Le projet comprend la réparation, le nettoyage et la finition de la façade, en utilisant des matériaux de haute qualité pour restaurer l'extérieur du bâtiment à son ancienne gloire tout en améliorant sa durabilité et son apparence. Approche Intégrée: Les travaux de échafaudages et de façade sont planifiés et exécutés en tandem pour minimiser les perturbations et optimiser les délais du projet. Sécurité et Conformité : Tous les processus de échafaudages et de restauration respectent les normes et réglementations de sécurité les plus strictes, garantissant un environnement sécurisé pour les travailleurs et les passants. Amélioration Esthétique : La façade restaurée est conçue pour rehausser l'attrait visuel du bâtiment, reflétant un mélange de techniques modernes et d'esthétiques classiques. Ce projet intégré met en évidence la synergie entre le soutien structurel et le raffinement esthétique, offrant un extérieur rajeuni et sécurisé.",
      "_id": "6",
      "registeredDate": "2024-08-02T09:30:00Z"
    },
    // {
    //   "title": "PROJET 7:APPLICATION D'UNE NOUVELLE COUCHE POUR LA RÉNOVATION DE LA FAÇADE",
    //   "image": addPhotos({project: 7, length: 8}),
    //   "alt": "APPLICATION D'UNE NOUVELLE COUCHE POUR LA RÉNOVATION DE LA FAÇADE",
    //   "description": "Ce projet se concentre sur l'amélioration et la protection de l'extérieur du bâtiment grâce à l'application d'une nouvelle couche sur la façade. Le processus implique une préparation minutieuse et l'utilisation de matériaux de haute qualité pour garantir une finition durable et esthétiquement attrayante. Étapes Clés: Préparation de la Surface: La façade existante est soigneusement nettoyée, et toutes les imperfections sont réparées pour créer une base lisse et stable pour la nouvelle couche. Application de la Nouvelle Couche: Un revêtement soigneusement sélectionné est appliqué à la façade, offrant à la fois une amélioration esthétique et une protection accrue contre les facteurs environnementaux. Durabilité Améliorée: La nouvelle couche est conçue pour résister aux conditions météorologiques rigoureuses, contribuant à la longévité et à la résilience de l'extérieur du bâtiment. Amélioration Esthétique: La nouvelle couche revitalise la façade, offrant un aspect moderne et propre qui rehausse l'apparence globale de la structure. Ce projet de rénovation garantit que la façade est à la fois protégée et esthétiquement améliorée, combinant fonctionnalité et style.",
    //   "_id": "7",
    //   "registeredDate": "2024-08-28T09:30:00Z"
    // },
    {
      "title": "PROJET 7: INSTALLATION DE ÉCHAFAUDAGES POUR L'AMÉLIORATION STRUCTURELLE",
      "image": addPhotos({project: 8, length: 8}),
      "alt": "INSTALLATION DE ÉCHAFAUDAGES POUR L'AMÉLIORATION STRUCTURELLE",
      "description": "Ce projet se concentre sur l'installation stratégique de échafaudages pour faciliter l'amélioration structurelle et la restauration de la façade du bâtiment. Le échafaudages joue un rôle clé en fournissant un accès sécurisé et efficace à tous les niveaux du bâtiment, permettant des inspections détaillées et des réparations pour renforcer la structure. Caractéristiques Principales: Installation Sécurisée de Scaffolding: Un échafaudages de haute qualité est installé pour garantir un accès sécurisé à toutes les zones de la façade, permettant aux ouvriers d'effectuer des travaux de restauration précis et approfondis. Renforcement Structurel: Le échafaudages permet l'évaluation et la réparation des composants structurels critiques de la façade, assurant la stabilité à long terme du bâtiment. Processus de Travail Efficace: L'installation du échafaudages est conçue pour optimiser le flux de travail des tâches de restauration, minimisant les temps d'arrêt et permettant des inspections et réparations approfondies. Sécurité Renforcée: La structure de échafaudages respecte toutes les normes de sécurité, garantissant la sécurité des travailleurs et la protection des zones environnantes pendant le projet. Préservation de la Façade: L'objectif du projet est de préserver et d'améliorer l'intégrité structurelle de la façade tout en apportant des améliorations esthétiques. Cette installation de échafaudages sert de fondation pour restaurer et renforcer la façade du bâtiment, garantissant un extérieur durable et résistant.",
      "_id": "7",
      "registeredDate": "2024-09-11T09:30:00Z"
    },
    {
        "title": "PROJET 8: RÉNOVATION DES FAÇADEs DE CE BÂTIMENT EN DISPERSION",
        "image": addPhotos({project: 9, length: 10}),
        "alt": "PROJET 8: RÉNOVATION DES FAÇADEs DE CE BÂTIMENT EN DISPERSION",
        "description": "Ce projet se concentre sur la rénovation complète de la façade du bâtiment et la peinture des murs de cour, améliorant à la fois l'esthétique extérieure et la fonctionnalité des espaces. L'objectif est de redonner vie à la propriété, en préservant son charme tout en apportant des mises à jour modernes. Caractéristiques Principales: Rénovation de la Façade: L'extérieur du bâtiment est minutieusement restauré, comprenant des réparations des dommages, un nettoyage, et l'application de revêtements protecteurs pour améliorer la durabilité et l'apparence. Peinture des Murs de Cour: Les murs de cour reçoivent une nouvelle couche de peinture, soigneusement choisie pour compléter le design global du bâtiment, rehaussant ainsi l'attrait visuel des espaces extérieurs. Harmonie Esthétique: Le projet garantit que la façade et les murs de la cour sont visuellement cohérents, créant un environnement harmonieux et agréable. Durabilité et Protection: L'utilisation de matériaux et de techniques de haute qualité garantit que la façade et les murs de la cour sont protégés contre les intempéries et l'usure, préservant leur beauté et leur intégrité structurelle au fil du temps. Esthétique Fonctionnelle: Au-delà de l'attrait visuel, les rénovations améliorent la fonctionnalité de la cour, en faisant un espace plus accueillant et agréable. Ce projet revitalise le bâtiment en combinant des techniques de restauration modernes avec un design réfléchi, améliorant à la fois la fonctionnalité et l'esthétique de l'extérieur.",
        "_id": "8",
        "registeredDate": "2025-09-24T09:30:00Z"
      },
  ]