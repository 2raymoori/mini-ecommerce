interface AppHeading1Props {
    title: string
}
const AppHeading1 = ({ title }: AppHeading1Props) => {
    return (
        <h1 className="text-2xl font-bold mb-4 text-center mt-12">{title}</h1>
    )
}
export default AppHeading1