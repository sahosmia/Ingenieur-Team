import { PageBannerPropsType } from "../types"

const PageBanner = ({title, content, children} : PageBannerPropsType) => {
    return (
        <div className='pt-40 bg-secondary rounded-b-3xl' >
            <div className='bg-opacity-70  py-28' >
                <div className='container text-center'>
                    <h1 className='section-header pb-12 '>{title}</h1>
                    <p className='text-gray-500'>{content}</p>
                    {children}
                </div>
            </div>
        </div>
  )
}

export default PageBanner