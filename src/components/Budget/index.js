import React from "react"
import "./styles.css"
import '../../../src/gobalStyles/colors.css'
import '../../../src/gobalStyles/fonts.css'
import Face from  "./Face"
import Warning1 from  "./Warning1"
import Warning2 from  "./Warning2"
import YourBudget from  "./YourBudget"
import Needhelp2 from  "./Needhelp2"
import ChartBox from  "./ChartBox"



const Budget = () => (


<div className='budget-max-width'>
  <div className='box'>
    <div className="grid-container">
              <div className="grid-item">
              <p className='catagory color-grey300'>
              <br></br>
              <YourBudget/>
              </p>
            
          </div>
          <div className="grid-item">
              <p className='catagory error-400'>
              <h1>Girlfriend's birthday</h1>
              <br></br>
              <div className='amount-1'>
                <Warning2/> 20 days until Girlfriend’s birthday</div>
              
              </p>
              
              <p className= {'amount-1 price'}>
                  -R2965,00
              </p>
          </div>
         
          <div className="grid-item">
              <p className='catagory color-grey300'>
              <h1>Playstation 5</h1>
              <br></br>
              <Warning1/> 100 days until playstation 5
              </p>
              <p className={'amount-1 price'}>
                  -R1500,00
              </p>
              
          </div>

          <div>
            <h2>
              Summary
            </h2>
            </div>

          <div className='budget-container-flex'>
      


        <div> 
          <div class="grid-item">
          <h1><Face/>Consistency is key, Thabiso  <br></br> <br></br>You had quite a good start, however, your biggest drawback is spending on fuel. 
            To reach your goals, you'll need to cut back on fuel spend. Here's how,  Read for more tips</h1>
        </div>


        <br></br>
 <div class="need">
 <Needhelp2/>
          
 </div>
        

 <br></br>
 <br></br>

 <div class="chart">
 <ChartBox/>
          
 </div>

          </div>
          

      </div>
      
</div>


</div>
  

</div>  

   
)



export default Budget