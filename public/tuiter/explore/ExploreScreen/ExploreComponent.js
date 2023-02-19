import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
<div class="row">
    <!-- search field and cog -->
    <!--- search bar -->
    <div class="input-group position-relative mb-2">
        <!-- <span class="input-group-text bg-transparent border-end-0"><i class="fas fa-search"></i></span> -->
        <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input type="text" class="form-control rounded-pill ps-5 me-5" placeholder="Search Tuiter">
            <div class="position-absolute top-50 end-0 translate-middle"><i
                class="fas fa-cog text-primary"></i>
        </div>
        </div>

        
        <!--<input type="text" class="form-control rounded-pill ps-5 bg-white me-5 "
            placeholder="Search Twitter">
        <div class="position-absolute top-50 start-0 translate-middle-y ps-4"><i class="fas fa-search fa-xs text-muted"></i>
        </div> -->
        

    </div>

    <!-- tabs -->
    <div class="row mb-3">
        <ul class="nav nav-tabs">
            <li class="nav-item h6">
                <a class="nav-link active h6" href="for-you.html">For you</a>
            </li>
            <li class="nav-item h6">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item h6">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item h6">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block h6">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
    </div>
    <!-- image with overlaid text -->
    <div class="position-relative p-0">
        <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" class="img-fluid">
        <h1 class="position-absolute bottom-0 start-0 text-white fs-1 p-3">
            <b>SpaceX's Starship</b>
        </h1>
    </div>


    ${PostSummaryList()}
</div>
    `);
}

$(() => $('#wd-explore-component').append(ExploreComponent()));

export default ExploreComponent;
