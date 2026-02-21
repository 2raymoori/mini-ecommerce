interface AppHeading1Props {
    title: string
}
const AppHeading3 = ({ title }: AppHeading1Props) => {
    return (
        <h1 className="text-small text-gray-500 font-normal text-center ">{title}</h1>
    )
}
export default AppHeading3