import Accordion from '../components/Accordion'
function AccordionPage(){

    const items = [
        {
            id: 'A1',
            label: 'Can i use react on a project?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas, magna eget pharetra tempus, libero eros volutpat libero, et tincidunt neque justo eu metus. Nulla dignissim ex massa, eu gravida lorem fermentum eu. Pellentesque auctor laoreet egestas.'
        },
        {
            id: 'B2',
            label: 'Can i use JavaScript on a project?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas, magna eget pharetra tempus, libero eros volutpat libero, et tincidunt neque justo eu metus. Nulla dignissim ex massa, eu gravida lorem fermentum eu. Pellentesque auctor laoreet egestas.'
        },
        {
            id: 'C3',
            label: 'Can i use CSS on a project?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas, magna eget pharetra tempus, libero eros volutpat libero, et tincidunt neque justo eu metus. Nulla dignissim ex massa, eu gravida lorem fermentum eu. Pellentesque auctor laoreet egestas.'
        },
    ]
return <Accordion items={items}></Accordion>

}
export default AccordionPage;