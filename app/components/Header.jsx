import React from 'react'

const Header = () => {
    return (
        <div>
            <div className="flex gap-5 justify-between items-start px-5 w-full max-md:flex-wrap max-md:max-w-full">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c285af5fc647fe182b3d6c5c848d974dfe1f8be79e63db398137ebe3f95cf2c4?"
                    className="shrink-0 self-end mt-32 border-2 border-black border-solid aspect-[0.66] fill-pink-300 stroke-[2px] stroke-black w-[85px] max-md:mt-10"
                />
                <div className="flex gap-5 justify-center items-center pl-6 my-auto bg-white border-black border-solid shadow-sm border-[5px] max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col justify-center self-stretch px-0.5 my-auto text-4xl whitespace-nowrap text-neutral-950">
                        <div className="flex gap-4 justify-center">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/02fed191a996df95a73996e4cb67a844b3d68a4f740c0a7de05aeade561aa79e?"
                                className="shrink-0 w-12 aspect-[0.98] fill-neutral-950"
                            />
                            <div className="border border-solid border-neutral-950">znis</div>
                        </div>
                    </div>
                    <div className="shrink-0 self-stretch my-auto w-1 bg-black border-4 border-black border-solid h-[89px]" />
                    <div className="flex gap-0 self-stretch">
                        <div className="flex flex-auto gap-0 self-end text-2xl font-medium text-neutral-950">
                            <div className="flex gap-5 justify-between my-auto">
                                <div>About //</div>
                                <div>Portfolio</div>
                                <div>Hire Me</div>
                            </div>
                            <div className="shrink-0 bg-black border-4 border-black border-solid h-[89px] w-[232px]" />
                        </div>
                        <div className="flex gap-5 justify-between">
                            <div className="shrink-0 my-auto w-1 bg-black border-4 border-black border-solid h-[89px]" />
                            <div className="flex flex-col">
                                <div className="shrink-0 bg-white border-black border-solid border-[3px] h-[9px]" />
                                <div className="shrink-0 mt-20 h-2 bg-white border-black border-solid border-[3px] max-md:mt-10" />
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7766c01dce10a8ed95a4a9e61d51b31edb3d7211c9fda7a7504e92773ab56a45?"
                    className="shrink-0 self-start border-2 border-black border-solid aspect-[1.19] fill-pink-300 stroke-[2px] stroke-black w-[97px]"
                />
            </div>
        </div>
    )
}

export default Header