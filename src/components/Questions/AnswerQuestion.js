import React from 'react'
import './AnswerQuestion.css'
import DropdownComment from './dropdownComment'
import 'bootstrap/dist/js/bootstrap.js';

function AnswerQuestion({ answer ,queId}) {
	queId = 'que'+queId;
	return (
		<div>
			<hr class="my-1" />

			<footer class="">

				{/* <div class="collapse" id='collapseExample'> */}
				<div class="collapse" id={queId}>
					
				QueId :- {queId}
		
					<div class="card border border-right-0 border-left-0 border-bottom-0 mt-1">

						

						<section>
							<div class="card p-2 mt-3">

								<div class="d-flex">
									<div class="">
										<a class="text-decoration-none" href="#">
											<img class="profile-pic" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" width="40" height="40" alt="..." />
										</a>
									</div>
									<div class="flex-grow-1 pl-2">
										<a class="text-decoration-none text-capitalize h6 m-0" href="#">Tarzan</a>
										<p class="small m-0 text-muted">27 mins ago</p>
									</div>
									<div >
										<div class="dropdown">
											<a class=""  role="button" id={queId} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												<i class="fas fa-chevron-down"></i>
											</a>

											<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
												<a class="dropdown-item text-primary" href="#">Edit</a>
												<a class="dropdown-item text-primary" href="#">Delete</a>
											</div>
										</div>
									</div>
								</div>

								<div class="card-body p-0">
									<p class="card-text h7 mb-1">
										
										{answer.description}
									</p>
									<a class="card-link small" href="#">
										<i class="far fa-thumbs-up"></i> 20 Like
									</a>
									<a class="small text-decoration-none p-3" data-toggle="collapse" href="#replay" role="button" aria-expanded="false" aria-controls="replay">
										<i class="fas fa-share"></i> 90 Replay
									</a>
								</div>
							</div>

							<DropdownComment />


						</section>


					</div>
				</div>

			</footer>

		</div>


	)
}

export default AnswerQuestion