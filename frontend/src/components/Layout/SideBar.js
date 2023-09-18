import React   from 'react' 
import { SidebarContainer, SidebarList, SidebarWrapper } from '../../assets/styles/Sidebar.style'
import { Header3 } from '../../assets/styles/Global.style'
import { Link } from 'react-router-dom'


const SideBar = () => {
    return(
        <SidebarContainer>
            <SidebarWrapper>
                <div className='mb-10'>
                    <Header3> Sidebar Title</Header3>
                    <SidebarList>
                        <li>
                            Home
                        </li>
                        <li>
                            Anaytics
                        </li>
                        
                        <li>
                            Sales
                        </li>

                    </SidebarList>
                </div>
                <div className='mb-10'>
                    <Header3> Sidebar Title</Header3>
                    <SidebarList>
                        <li>
                            Users
                        </li>
                        <li>
                            <Link to="/products" className="nav-link">Products</Link>
                        </li>
                        
                        <li>
                            Reports
                        </li>

                    </SidebarList>
                </div>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar