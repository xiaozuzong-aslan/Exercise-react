import React,{useContext} from 'react'
// import useTagList from 'helpers/useTagList'
import styled from 'styled-components'
import Icon from 'components/Icon'
import {Link} from 'react-router-dom'
import {Context} from 'Context'


const DetailWarrp = styled.div`
   
    flex-grow:1;
    padding-top:4px;
    ul{
        padding-left:16px;
        a{
            /* box-shadow: 0 3px 3px -3px rgba(128,128,128,0.2); */
            border-bottom:1px solid rgba(128,128,128,0.2);
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:10px 0;
            
        }
    }
    svg{
        width:24px;
        height:24px;
        fill:rgba(128,128,128,0.7);
        margin-right:10px;
    }
    div{
        display:flex;
        justify-content:center;
        margin-top:40px;
        button{
            font-size:18px;
            border:none;
            padding:8px 12px;
            background:#767676;
            color:white;
        }
    }
   
`;

const  Details:React.FC = () => {
    // const {tagList} = useTagList()
    const {state} = useContext(Context)!
    return (
        <DetailWarrp>
            <ul>
                {state.tagList.map(item=><li key={item}>
                    <Link to={`/detail/edit/${item}`}>
                        {item} <Icon name='right'/>
                    </Link>
                </li>)}
            </ul>
            <div><button>新建标签</button></div>
        </DetailWarrp>
    )
}
export default Details
