function NavLinks() {
    return(
        <ul id="nav-links">
            {/* About */}
            <li id="nav-about" class="nav-elem">
                <a href="About.html">
                    <h1>About</h1>
                </a>     
            </li>
            {/* Work */}
            <li id="nav-work" class="nav-elem">
                <a href="Work.html">
                    <h1>Work</h1>
                </a>
            </li>
            {/* Contact */}
            <li id="nav-contact" class="nav-elem">
                <a href="Contact.html">
                    <h1>Contact</h1>
                </a>
            </li>
        </ul>
    )
}

export default NavLinks;