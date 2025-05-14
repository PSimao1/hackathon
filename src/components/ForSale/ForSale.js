import React from 'react'

function ForSale({title, text}) {
    return (
        
        <div class="position-relative p-5 text-center text-muted bg-body ">
            
            <h1 class="text-body-emphasis">{title}</h1>
            <p class="col-lg-6 mx-auto mb-4">
                {text}
            </p>
            
        </div>
        
    )
}

export default ForSale

