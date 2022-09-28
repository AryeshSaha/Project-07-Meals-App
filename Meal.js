$.ajax({
    type: 'get',
    url: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',
    success: function(res) {
        const meals = res.meals;

        meals.map((items)=>{
            const newItem = `<div class="col-md-3 text-center my-4 mx-5 shadow-lg p-3 bg-body"> 
            <img src=${items.strMealThumb} alt="mealpic" class="img-fluid p-2"/>
            <p class="mt-3">${items.strMeal}</p>
            </div>`

            $(`#myitems`).append(newItem);
        })
    },
    error: function(err) {
        console.log(err)
    }
})