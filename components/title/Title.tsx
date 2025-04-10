interface Props {
    title: string,
    content: string
}
export default function Title({ title, content }: Props) {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
                <div className='w-5 h-10 bg-red-500 rounded-sm'></div>
                <h4 className="text-red-500 font-semibold text-[16px] leading-[20px]">{content}</h4>
            </div>
            <h1 className="text-4xl font-semibold leading-12 tracking-[4%]">{title}</h1>
        </div>
    )
}
