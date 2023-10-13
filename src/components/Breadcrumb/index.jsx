import { Link, useLocation } from "react-router-dom"
import { Breadcrumb } from "antd"

export const BreadcrumbComponent = () => {
    const location = useLocation()
    const breadcrumbView = () => {
        const { pathname } = location
        const pathnames = pathname.split("/").filter((item) => item)

        return(
            <div>
                <Breadcrumb>
                    { pathnames.length > 0 ? (
                        <Breadcrumb.Item>
                            <Link to="/">Home</Link>
                        </Breadcrumb.Item>
                    ) : <Breadcrumb.Item>Home</Breadcrumb.Item>
                }
                {
                    pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
                        const isLast = index === pathnames.length - 1
                        return isLast ? (
                            <Breadcrumb.Item>
                                { name }
                            </Breadcrumb.Item>
                        ) : (
                            <Breadcrumb.Item>
                                <Link to={`${routeTo}`}>{ name }</Link>
                            </Breadcrumb.Item>
                        )
                    })
                }
                </Breadcrumb>
            </div>
        )
    }
    return <>{ breadcrumbView() }</>
}