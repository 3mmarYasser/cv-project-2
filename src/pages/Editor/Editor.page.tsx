import React, {useEffect} from 'react';
import NavbarEditor from "./components/Navbar/Navbar.editor";
import {useNavigate, useParams} from "react-router-dom";
import {getTemplate} from "./Editor.service";
interface Props{
    type:"resume"|"cv"|"cover-letter",
}
const Editor:React.FC<Props> = ({type}) => {
    const {id} = useParams();
    const navigate = useNavigate()
    useEffect(()=>{
        if(id !== "new"){
            (async ()=>{
                await getTemplate(id as string).then(
                    r=>{
                        console.log(r)

                    },e=>{
                        navigate("/404")
                    }
                )
            })();
        }
    })
    return (
        <>
            <NavbarEditor/>
        </>
    );
};

export default Editor;
