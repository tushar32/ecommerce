import styled from 'styled-components';

export const SidebarContainer = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    background-color: rgb(251, 251, 255);
    position: sticky;
    top: 50px;
`
export const SidebarWrapper = styled.div`
    padding: 20px;
    color: #555;
`

export const SidebarList = styled.ul`
    list-style: none;
    padding: 5px;

    li {
        padding: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        border-radius: 10px;

    &:hover {
        background-color: rgb(240, 240, 255);
        }
      .nav-link {
        color: #525b75
      }  
    }
`