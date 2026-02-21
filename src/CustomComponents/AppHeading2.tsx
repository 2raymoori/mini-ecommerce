interface AppHeading2Props {
    title: string
}
const AppHeading2 = ({ title }: AppHeading2Props) => {
    return (
        <h1 className="text-xl font-bold mb-4  mt-12">{title}</h1>
    )
}
export default AppHeading2