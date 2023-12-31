import Container from "../Container";
import {categories} from '../Categories/categoriesData'
import CategoryBox from "./CategoryBox";



const Categories = () => {
    return (
        <div>
        

            <Container>
                <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto ">

                    {categories.map(item => (

                       
                  

                        <CategoryBox label={item.label} icon={item.icon} key={item.label} />



                    ))



                    }


                </div>

 
            </Container>
        </div>
    );
};

export default Categories;