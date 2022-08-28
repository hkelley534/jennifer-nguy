
function Works() {
    return(
        <div id="works">
            {/* Works Title */}
            <div id="works-title">
                <h1>MY WORK</h1>
            </div>
            {/* Works Body  */}
            <div id="works-body">
                {/* VSA work  */}
                <div id="VSA-works" class="works-div">
                    <div id="VSA-image" class="works-image">
                        <img id="VSA-design-img" src="img/vsa-flyer.png" alt="VSA flyer" />
                    </div>
                    <div id="VSA-description" class="works-description">
                        <h2>VSA Design</h2>
                    </div>
                </div>
                {/* Graphic Design Work  */}
                <div id="graphic-works" class="works-div">
                    <div id="graphic-image" class="works-image">
                        <img id="graphic-img" src="img/typography-poster.png" alt="typography poster" />
                    </div>
                    <div id="graphic-description" class="works-description">
                        <h2>Graphic Design</h2>
                    </div>
                </div>
                {/* Web Development Work  */}
                <div id="web-dev-works" class="works-div">
                    <div id="web-dev-image" class="works-image">
                        <img id="web-dev-img" src="img/bechdel-website.png" alt="website" />
                    </div>
                    <div id="web-dev-description" class="works-description">
                        <h2>Web Development</h2>
                    </div>
                </div>
            </div>
            {/* See More Button  */}
            <div id="works-button-container">
                <a href="Work.html" class="works-button">
                    <h2>SEE MORE</h2>
                </a>
            </div>
        </div>
    )
}

export default Works;