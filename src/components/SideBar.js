import Link from "./Link";

function SideBar(){

    const links = [
        {
            label: 'Dropdown', path: '/'
        },
        {
            label: 'Accordion', path: '/accordion'
        },
        {
            label:'Buttons', path: '/buttons'
        },
        {
            label:'Modal', path: '/modal'
        },
        {
            label:'Table', path: '/table'
        },
        {
            label:'Counter', path: '/counter'
        },
    ]

    const renderedLinks = links.map((link) => {
        return <Link key={link.label} to={link.path}>{link.label}</Link>
    })

    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col gap-3 ">
            {renderedLinks}
        </div>
    )
}

export default SideBar