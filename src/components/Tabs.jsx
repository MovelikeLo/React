export default function Tabs({buttons, children, buttonsContainer="menu"}) {
    const ButtonContainer = buttonsContainer;
    return (
        <>
        <ButtonContainer>
            {buttons}
            </ButtonContainer>
            {children}
        </>
    );
}