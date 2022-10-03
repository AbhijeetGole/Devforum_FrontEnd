import React from 'react'

function CommentBox({queId}) {
    
   let  url = '#que'+queId;
  return (
    <div class="">
        {queId} 
        {url}
					<ul class="list-group list-group-horizontal">
						<li class="list-group-item flex-fill text-center p-0 px-lg-2 border border-0">
							<a class="small text-decoration-none" href="#">
								<i class="far fa-thumbs-up"></i> 20 Like
							</a>
						</li>
						<li class="list-group-item flex-fill text-center p-0 px-lg-2 border border-right-0 border-top-0 border-bottom-0">
							

                            <a class="btn btn-primary" data-bs-toggle="collapse" href={url}
                             role="button" aria-expanded="false" aria-controls={url}>

								 40 Comment
							</a>
						</li>
						<li class="list-group-item flex-fill text-center p-0 px-lg-2 border border-right-0 border-top-0 border-bottom-0 ">
							<a class="small text-decoration-none" href="#">
								<i class="fas fa-share"></i> 90 Replay
							</a>
						</li>
					</ul>
				</div>
  )
}

export default CommentBox