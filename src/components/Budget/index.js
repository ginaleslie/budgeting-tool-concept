import React from "react"
import "./styles.css"
import '../../../src/gobalStyles/colors.css'
import '../../../src/gobalStyles/fonts.css'
import Face from  "./Face"
import Warning1 from  "./Warning1"
import Warning2 from  "./Warning2"
import YourBudget from  "./YourBudget"



const Budget = () => (
  

  <div className='box'>

    

  <div className="grid-container2">
              <div className="grid-item2">
              <p className='catagory color-grey300'>
              <div className='info-dot2 green'></div>
              <br></br>
              <YourBudget/>
              </p>
            
          </div>
          <div className="grid-item2">
              <p className='catagory error-400'>
              <h1>Girlfriend's birthday</h1>
              <br></br>
              <div className='amount-1'><Warning2/> 20 days until Girlfriend’s birthday</div>
              
              </p>
              
              <p className= {'amount-1 price'}>
                  -R2965,00
              </p>
          </div>
         
          <div className="grid-item2">
              <p className='catagory color-grey300'>
              <div className='info-dot2 green'></div>
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

          <div>
          <div class="grid-item2"><h1>Consistency is key, Thabiso</h1>
          <div class="col-12 col-sm-10">
          <Face/>You had quite a good start, 
          however, your biggest drawback is spending on fuel.
           To reach your goals, you'll need to cut back on fuel spend. Here's how, <a href="default.asp" target="_blank"> Read for more
            tips.</a> </div>

          </div>
          
          </div>
          <p className= ' catagory wealth-grey-300'>Need help with financial planning?<a href="default.asp" target="_blank"> Request a call </a></p>

      </div>
      
</div>

   
)



export default Budget