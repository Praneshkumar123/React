import {useParams,Link} from 'react-router-dom';

const ApiTen = () =>{
    const{fullname,edu,city} = useParams();
    
    return(
        <section> 
            <h1>How To useParams () ?</h1>
            <p align="center"> 
                <Link to="/api10/Pranesh/Bsc/Bangalore"className="link"> Pranesh </Link>
                <Link to="/api10/Yuvan/Bsc/Madurai"className="link"> Yuvan  </Link>
                <Link to="/api10/Suhas/Bsc/Belgavi"className="link"> Suhas </Link>
                <Link to="/api10/Akash/Bsc/Kurchi"className="link"> Akash </Link>
            </p>
            <table align="center" cellPadding="20">
                <tbody>
                    <tr>
                        <th> Customer Name : </th>
                        <td> {fullname} </td>
                    </tr>
                    <tr>
                        <th> Education : </th>
                        <td> {edu} </td>
                    </tr>
                    <tr>
                        <th> City : </th>
                        <td> {city} </td>
                    </tr>
                </tbody>
            </table>
            </section>
    )

}

export default ApiTen;