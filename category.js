
function checkTab(){
    let tab = document.getElementById("tab")
    let categories = document.querySelectorAll(".cate")
    categories.forEach(cate => {
        cate.addEventListener("click", function(){
            tab.style.left = cate.offsetLeft + "px"
            tab.style.width = cate.offsetWidth + "px"   
        })
    })
}

function showCategory(){
    let cate_nav = document.querySelectorAll(".cate")
    cate_nav.forEach(cate =>{
        cate.addEventListener("click", function(){
            let cate_type = cate.getAttribute("category")
            showBlog(cate_type)
        })
    })
}

function showBlog(cate){
    let cate_blogs = document.querySelectorAll(".cate-blog")
    cate_blogs.forEach(blog => {
        let category = blog.getAttribute("category")
        switch(cate){
            case category:
                blog.style.display = "initial"
                break;
            case "all":
                blog.style.display = "initial"
                break;
            default:
                blog.style.display = "none"
                break;
        }
    })
}