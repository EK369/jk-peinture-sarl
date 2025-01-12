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
      "title": "Example Blog Title",
      "image": addPhotos({project: 1, length: 4}),
      "alt": "Example Blog Image",
      "description": "This is a sample description for the example blog post. It contains a brief overview of the blog content.",
      "_id": "1",
      "registeredDate": "2025-01-01T12:00:00Z"
    },
    {
      "title": "Another Blog Title",
      "image": addPhotos({project: 2, length: 22}),
      "alt": "Another Blog Image",
      "description": "Another example description for the second blog post. This text serves as a summary of the blog's content.",
      "_id": "2",
      "registeredDate": "2025-01-05T15:00:00Z"
    },
    {
      "title": "Third Blog Title",
      "image": addPhotos({project: 3, length: 7}),
      "alt": "Third Blog Image",
      "description": "A brief description for the third blog post, giving readers an idea of what the blog is about.",
      "_id": "3",
      "registeredDate": "2025-01-10T09:30:00Z"
    },
    {
      "title": "Third Blog Title",
      "image": addPhotos({project: 4, length: 9}),
      "alt": "Third Blog Image",
      "description": "A brief description for the third blog post, giving readers an idea of what the blog is about.",
      "_id": "4",
      "registeredDate": "2025-01-10T09:30:00Z"
    },
    {
      "title": "Third Blog Title",
      "image": addPhotos({project: 5, length: 10}),
      "alt": "Third Blog Image",
      "description": "A brief description for the third blog post, giving readers an idea of what the blog is about.",
      "_id": "5",
      "registeredDate": "2025-01-10T09:30:00Z"
    },
    {
      "title": "Third Blog Title",
      "image": addPhotos({project: 6, length: 3}),
      "alt": "Third Blog Image",
      "description": "A brief description for the third blog post, giving readers an idea of what the blog is about.",
      "_id": "6",
      "registeredDate": "2025-01-10T09:30:00Z"
    },
    {
      "title": "Third Blog Title",
      "image": addPhotos({project: 7, length: 8}),
      "alt": "Third Blog Image",
      "description": "A brief description for the third blog post, giving readers an idea of what the blog is about.",
      "_id": "7",
      "registeredDate": "2025-01-10T09:30:00Z"
    },
    {
      "title": "Third Blog Title",
      "image": addPhotos({project: 8, length: 9}),
      "alt": "Third Blog Image",
      "description": "A brief description for the third blog post, giving readers an idea of what the blog is about.",
      "_id": "8",
      "registeredDate": "2025-01-10T09:30:00Z"
    },
  ]

  console.log("blogData", blogsData)


  /**
   * RÉNOVATION PROJET
   * 
   * Ce projet de rénovation s'est concentré sur la
                  transformation de l'espace avec des mises à
                  jour et des améliorations modernes. Des
                  améliorations structurelles aux changements
                  esthétiques

              PROJET PEINT
              
              Ce projet de peinture a consisté à rafraîchir
                  l'intérieur/l'extérieur avec une nouvelle couche
                  de peinture de haute qualité. Le travail a été
                  soigneusement exécuté pour garantir une finition
                  lisse et impeccable.

                  PROJET D INSTALLATION

                  Ce projet d'installation a consisté à mettre en
                  place et à intégrer des systèmes et équipements
                  essentiels avec précision. Notre équipe a veillé à
                  ce que tous les composants soient installés
                  efficacement.
   */