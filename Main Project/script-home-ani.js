window.addEventListener('scroll',()=>{
    let scrollPosition = 100;
    let scrollPositionfood = 300;
    let scrollPositionfoodnon = 300;

    let content = document.querySelector('.about');
    let contentPosition = content.getBoundingClientRect().top;
    let headContent = document.querySelector('.abt-h1');
    let headContentimg = document.querySelector('.abt-img');

    let contentFood = document.querySelector('.veg');
    let contentFoodPosition = contentFood.getBoundingClientRect().top;
    let foodContentb1 = document.querySelector('.b1');
    let foodContentb2 = document.querySelector('.b2');
    let foodContentb3 = document.querySelector('.b3');
    let contentFoodnon = document.querySelector('.non-veg');
    let contentFoodPositionnon = contentFoodnon.getBoundingClientRect().top;
    let foodContentbb1 = document.querySelector('.bb1');
    let foodContentbb2 = document.querySelector('.bb2');
    let foodContentbb3 = document.querySelector('.bb3');

    if(contentPosition < scrollPosition){
        headContent.classList.add('active-abt-text');
        headContentimg.classList.add('active-abt-img');
    }
    else{
        headContent.classList.remove('active-abt-text');
        headContentimg.classList.remove('active-abt-img');
    }


    if(contentFoodPosition < scrollPositionfood){
        foodContentb1.classList.add('active-b1');
        foodContentb2.classList.add('active-b2');
        foodContentb3.classList.add('active-b3');
    }
    else{
        foodContentb1.classList.remove('active-b1');
        foodContentb2.classList.remove('active-b2');
        foodContentb3.classList.remove('active-b3');
    }
    if(contentFoodPositionnon < scrollPositionfoodnon){
        foodContentbb1.classList.add('active-bb1');
        foodContentbb2.classList.add('active-bb2');
        foodContentbb3.classList.add('active-bb3');
    }
    else{
        foodContentbb1.classList.remove('active-bb1');
        foodContentbb2.classList.remove('active-bb2');
        foodContentbb3.classList.remove('active-bb3');
    }
});