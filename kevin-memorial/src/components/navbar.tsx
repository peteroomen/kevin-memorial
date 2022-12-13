interface IProps {
    selectedItemIndex: number,
}
function Navbar(props: IProps) {
    let links = [
        {title: 'Home', url: '/'},
        {title: 'Media', url: '/media'},
        {title: 'Music', url: '/music'},
        {title: 'Memories', url: '/memories'},
    ];

    return (
        <nav className='flex column font-nav navbar'>
            {links.map((link, i) => 
                <a href={link.url} className={i == props.selectedItemIndex ? "selected" : ""}>{link.title}</a>)
            }
        </nav>
    );
}

export default Navbar;