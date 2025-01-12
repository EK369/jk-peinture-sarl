// const creative_four_col_work_div = document.getElementById('creative-four-col-work');
// const showMoreButton = document.getElementById('more-less-btn');

{/* <div class="grid-item listing-effect illustration webdesign">
        <a href="images/pf1.jpg" title="Portfolio Title -1"> 
            <img id="creative-images" style="width: 340px; height: 413px; object-fit: cover;" src="images/pf1.jpg" alt="JK PEINTURE SAINT">
            <div class="work-detail">
                <h3 class="project-title mb_10">Projects Title - 01</h3>
                <div class="meta-title">Construction work</div>
            </div>
        </a>
    </div>
*/}

// grid-item listing-effect illustration webdesign
// grid-item listing-effect VectorDesign Photography
// grid-item listing-effect illustration webdesign
// grid-item listing-effect VectorDesign
// grid-item listing-effect webdesign VectorDesign Photography
// grid-item listing-effect illustration VectorDesign
// grid-item listing-effect VectorDesign
// grid-item listing-effect webdesign illustration Photography
// grid-item listing-effect webdesign

// This year - illustration
// This 6 month - VectorDesign illustration
// This month - Photography illustration VectorDesign
// This week - webdesign illustration VectorDesign Photography

// const getImagesFromBlogData = async () => {
//     let creativeTotal = 0;
//     try {
//         await axios.get(`${mainURL}/blogs`).then((response) => {
//             const blogsData = response?.data;
//             let blogsDataLength = blogsData.length;
//             let limit = blogsDataLength;
//             if(blogsDataLength >= 10)
//                 limit = blogsDataLength - 10;
//             else
//                 limit = 0;
//             for (let i = blogsDataLength - 1; i >= limit; i--) { // only 9 are here
//                 // let more_a = createElementItem("a", {_attribute: ["href"], _attributeContent: [`single_blog_slider.html?id=${blog?._id}`]}, "Read more ");
//                 creativeTotal += blogsData[i].image.length;
//                 let blogImages = blogsData[i].image;
//                 console.log(blogsData[i]);
//                 differenceInDates = isotopeFilter(dayjs(blogsData[i].registeredDate).subtract(2, 'day'));
//                 for (let j = 0; j < blogImages.length; j++) {
//                     let grid_item_div = createListingEffectElement(differenceInDates);
//                     let grid_item_a = createElementItem("a", {_attribute: ["href", "title", "data-source"], _attributeContent: [`single_blog_slider.html?id=${blogsData[i]?._id}`, "Construction 1", "data:image/" + blogImages[j].contentType+";base64," + blogImages[j].data.toString('base64')]})
//                     let grid_item_img = createElementItem("img", {_attribute: ["id", "src", "alt", "style"], _attributeContent: ["creative-img-id", "data:image/" + blogImages[j].contentType+";base64," + blogImages[j].data.toString('base64'), "JK PEINTURE SAINT", "width: 293px; height: 195px; object-fit: cover;"]});
//                     let work_detail_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["work-detail"]});
//                     let project_title_h3 = createElementItem("h3", {_attribute: ["class"], _attributeContent: ["project-title mb_10"]}, blogsData[i].title);
//                     let meta_title_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["meta-title"]}, !!blogsData[i].alt ? blogsData[i].alt : "Photography");

//                     _elementAppendChild(work_detail_div, project_title_h3);
//                     _elementAppendChild(work_detail_div, meta_title_div);
//                     _elementAppendChild(grid_item_a, grid_item_img);
//                     _elementAppendChild(grid_item_a, work_detail_div);
//                     _elementAppendChild(grid_item_div, grid_item_a);

//                     _elementAppendChild(creative_four_col_work_div, grid_item_div);
//                 }
//             }
//         })
//         document.getElementById('gif-loder').remove();
//     } catch (err) {
//         console.log(err)
//         document.getElementById('gif-loder').remove();
//     }
//     console.log(creativeTotal)
//     return creativeTotal;
// }
// let click = 0;
// let showMoreBtn;
// async function getImagesLength() {
//     let creativeTotal = await getImagesFromBlogData();
//     if(creativeTotal == 0) {
//         creative_four_col_work_div.appendChild(document.createTextNode("No creative work to show!"))
//         creative_four_col_work_div.setAttribute("style", "position: relative; height: 0px;")
//         showMoreButton.style.display = "none";
//     }
//     else {
//         let imagesOnRowSize = checkMediaQueryImagesSize();
//         showMoreBtn = () => showMore('grid-item', CREATIVE_IMAGES_TO_BE_SHOWN, creativeTotal, imagesOnRowSize);
//         showMoreButton.setAttribute("onclick", "showMoreBtn()");
        
//     }
//     return creativeTotal;
// }

document.getElementById('gif-loder').remove();
// cssMediaJS(['min-width: 1200px', 'max-width: 1200px', 'max-width: 992px', 'max-width: 768px'])//768