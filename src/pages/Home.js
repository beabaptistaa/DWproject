import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const Home = () => {

    return(
        <AnimatePresence>
      
      <motion.div className='grid-container'
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
                <Link to="obras">
                <div className="grid-item grid-item-item1">
                    <h1>Obras</h1>
                    <p>Explora as obras de Fernando Pessoa e seus Heterónimos.</p>
                </div>
                </Link>
                <Link to="vida">
                <div className="grid-item grid-item-item2">
                    <h1>Vida</h1>
                    <p>Descobre mais sobre a vida de Fernando Pessoa.</p>
                </div> 
                </Link>
      </motion.div>
      
      </AnimatePresence>
    );
    
   }
     
   export default Home;