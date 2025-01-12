const thumbPost_img_1 = document.querySelector('#thumbPost-img-1');
const thumbPost_img_2 = document.querySelector('#thumbPost-img-2');
const thumbPost_img_3 = document.querySelector('#thumbPost-img-3');
const thumbPost_img_4 = document.querySelector('#thumbPost-img-4');
const thumbPost_img_5 = document.querySelector('#thumbPost-img-5');
const thumbPost_a_1 = document.querySelector('#thumbPost-a-1');
const thumbPost_a_2 = document.querySelector('#thumbPost-a-2');
const thumbPost_a_3 = document.querySelector('#thumbPost-a-3');
const thumbPost_a_4 = document.querySelector('#thumbPost-a-4');
const thumbPost_a_5 = document.querySelector('#thumbPost-a-5');
const items = document.querySelectorAll('.item');

const postInfo_h3 = document.querySelector('#postInfo-h3');
const postInfo_p = document.querySelector('#postInfo-p');
const date_div = document.querySelector('#date-div');

const imageRoute = "images/blog/";
const params = window.location.search
const blogId = new URLSearchParams(params).get('id')

const getSingleBlogDatas = async () => {
    
    try {
        // const start = Date.now();
        await axios.get(`${mainURL}/blogs/${blogId}`).then(response => {
            const singleBlogData = response?.data;
            const { title, description, image, alt, registeredDate } = singleBlogData;
            console.log(singleBlogData)
            switch (image.length) {
                case 1:
                    for (let i = 0; i < 5; i++) {
                        eval("thumbPost_a_" + (i + 1)).setAttribute("href", `../civil-engineer-server/uploads/${title.replace(" ", "-") + "-" + 1 + "." + image[0]?.contentType.split("/")[1]}`);
                        eval("thumbPost_a_" + (i + 1)).setAttribute("title", alt);
                        eval("thumbPost_img_" + (i + 1)).setAttribute("src", "data:image/" + image[0].contentType+";base64," + image[0].data.toString('base64'))
                    }
                    break;
                case 2:
                    for (let i = 0; i < 4; i = i + 2) {
                        eval("thumbPost_a_" + (i + 1)).setAttribute("href", `../civil-engineer-server/uploads/${title.replace(" ", "-") + "-" + 1 + "." + image[0]?.contentType.split("/")[1]}`);
                        eval("thumbPost_a_" + (i + 2)).setAttribute("href", `../civil-engineer-server/uploads/${title.replace(" ", "-") + "-" + 2 + "." + image[1]?.contentType.split("/")[1]}`);
                        eval("thumbPost_a_" + (i + 1)).setAttribute("title", alt);
                        eval("thumbPost_a_" + (i + 2)).setAttribute("title", alt);
                        eval("thumbPost_img_" + (i + 1)).setAttribute("src", "data:image/" + image[0].contentType+";base64," + image[0].data.toString('base64'))
                        eval("thumbPost_img_" + (i + 2)).setAttribute("src", "data:image/" + image[1].contentType+";base64," + image[1].data.toString('base64'))
                    }
                    thumbPost_a_5.setAttribute("href", `../civil-engineer-server/uploads/${title.replace(" ", "-") + "-" + 1 + "." + image[0]?.contentType.split("/")[1]}`);
                    thumbPost_a_5.setAttribute("title", alt);
                    thumbPost_img_5.setAttribute("src", "data:image/" + image[0].contentType+";base64," + image[0].data.toString('base64'))
                    break;
                case 3:
                case 4:
                case 5:
                    for (let i = 0; i < image.length; i++) {
                        eval("thumbPost_a_" + (i + 1)).setAttribute("href", `../civil-engineer-server/uploads/${title.replace(" ", "-") + "-" + (i + 1) + "." + image[i]?.contentType.split("/")[1]}`);
                        eval("thumbPost_a_" + (i + 1)).setAttribute("title", alt);
                        eval("thumbPost_img_" + (i + 1)).setAttribute("src", "data:image/" + image[i].contentType+";base64," + image[i].data.toString('base64'))
                    }
                    for (let i = image.length; i < 5; i++) {
                        eval("thumbPost_a_" + (i + 1)).setAttribute("href", `../civil-engineer-server/uploads/${title.replace(" ", "-") + "-" + (i - image.length + 1) + "." + image[i - image.length]?.contentType.split("/")[1]}`);
                        eval("thumbPost_a_" + (i + 1)).setAttribute("title", alt);
                        eval("thumbPost_img_" + (i + 1)).setAttribute("src", "data:image/" + image[i - image.length].contentType+";base64," + image[i - image.length].data.toString('base64'))
                    }
                    break;
                default:
                    break;
            }
                
                postInfo_h3.appendChild(document.createTextNode(title));
                postInfo_p.appendChild(document.createTextNode(description));
                date_div.appendChild(document.createTextNode(customDateFormat(registeredDate)));
        });
        document.getElementById('gif-loder').remove();
        // const end = Date.now();
        // console.log(`Execution time: ${end - start} ms`);
        //postFormat_div
        // thumbPost_a_1.setAttribute("src", "data:image/"+blog.image[0].contentType+";base64,"+blog.image[0].data.toString('base64'))
        // thumbPost_a_1.setAttribute("href", imageRoute + image[0].name);
        // thumbPost_a_1.setAttribute("title", image[0].alt);
        // thumbPost_a_2.setAttribute("href", imageRoute + image[1].name);
        // thumbPost_a_2.setAttribute("title", image[1].alt);
        // thumbPost_a_3.setAttribute("href", imageRoute + image[2].name);
        // thumbPost_a_3.setAttribute("title", image[2].alt);


        // thumbPost_img_1.setAttribute("src", imageRoute + image[0].name);
        // thumbPost_img_1.setAttribute("alt", image[0].alt);
        // thumbPost_img_2.setAttribute("src", imageRoute + image[1].name);
        // thumbPost_img_2.setAttribute("alt", image[1].alt);
        // thumbPost_img_3.setAttribute("src", imageRoute + image[2].name);
        // thumbPost_img_3.setAttribute("alt", image[2].alt);

    } catch (err) {
        console.log(err);
        document.getElementById('gif-loder').remove();
    }
}
getSingleBlogDatas();

