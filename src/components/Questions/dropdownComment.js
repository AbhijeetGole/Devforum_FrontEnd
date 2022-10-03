import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Answer from './Answer';
function DropdownComment() {
    return (
        <div>
            <div class="collapse " id="replay" >
                <div class="card border border-right-0 border-left-0 border-bottom-0 mt-1">

                    <section class="mt-3">
                        <form action="">
                            <div class="input-group input-group">
                                <input type="text" class="form-control" placeholder="Write Comment" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div class="input-group-append">
                                    <a class="text-decoration-none text-white btn btn-primary" href="#" role="button">Replay</a>
                                </div>
                            </div>
                        </form>
                    </section>

                    <section>
                        <div class="card p-2 mt-3">

                            <div class="d-flex">
                                <div class="">
                                    <a class="text-decoration-none" href="#">
                                        <img class="profile-pic" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" width="40" height="40" alt="..." />
                                    </a>
                                </div>
                                <div class="flex-grow-1 pl-2">
                                    <a class="text-decoration-none text-capitalize h6 m-0" href="#">Shushant Singh</a>
                                    <p class="small m-0 text-muted">27 mins ago</p>
                                </div>
                                <div>
                                    <div class="dropdown">
                                        <a class="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-chevron-down"></i>
                                        </a>

                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" x-placement="top-start" className='dropdownre'>
                                            <a class="dropdown-item text-primary" href="#">Edit</a>
                                            <a class="dropdown-item text-primary" href="#">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                             <Answer />
                        </div>

                    </section>


                </div>
            </div>
        </div>
    )
}

export default DropdownComment