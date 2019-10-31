import React from 'react';

const Search = () => {
	return(
		<div className='search-css'>
			<form className=''>
				<div className='form-row'>
					<div className='form-group col-md-8'>
      					<input className="form-control" type="text" placeholder="Search" aria-label="Search" />
    				</div>
    				<div className='form-group col-md-2'></div>
    				<div className='form-group col-md-2'>
    					<h4>Welcome back</h4>
    				</div>
    			</div>
    		</form>
		</div>
	)
}


export default Search;