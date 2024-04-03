import Header from "./_components/Header"

function Provider({ children }) {
    return (
        <div>
            <Header />
            {
                children
            }
        </div>
    )
}

export default Provider