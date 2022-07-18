import React from 'react';

const Leaderboard = () => {
    return (
        <>
            <div className="leaderboard-grid">
                <div className="leaderboard-grid-item sticky">
                    <div className="leaderboard-user-card text-dark bg-light-gradient">
                        <div className="leaderboard-user-card-body">
                            <div className="user-card-info">
                                <div className="text-left">
                                    <div className="text-small">
                                        <code>My Rank</code>
                                        <h2>1st Place</h2>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-small">
                                        <code>My Score</code>
                                        <h2>69</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="leaderboard-grid-item">
                    <div className="leaderboard-card">
                        <div className="leaderboard-card-header">
                            <h1 className="text-light">Leaderboard</h1>
                            <div className="leaderboard-card-header-datebox">
                                <code className="text-light">July 11 - July 16</code>
                            </div>
                        </div>
                        <div className="leaderboard-card-body">
                            <ul className="leaderboard-card-list">
                                <li className="leaderboard-card-list-item">
                                    <div className="leaderboard-card-list-item-grid">
                                        <div className="text-left text-small-light"><code>Rank</code></div>
                                        <div className="text-left text-small-light"><code>User</code></div>
                                        <div className="text-left text-small-light"><code>Points</code></div>
                                    </div>
                                </li>
                                <li className="leaderboard-card-list-item">
                                    <div className="leaderboard-card-list-item-grid">
                                        <div className="leaderboard-flag text-dark bg-blue"><strong>1</strong></div>
                                        <div className="leaderboard-media">
                                            <div className="leaderboard-media-content">
                                                <div className="leaderboard-media-content-title text-light">Josh Klinckhardt</div>
                                                <div className="leaderboard-media-content-username">@norden</div>
                                            </div>
                                        </div>
                                        <div className="text-left mt">
                                            <strong className="text-blue">69</strong>
                                        </div>
                                    </div>
                                </li>
                                <li className="leaderboard-card-list-item">
                                    <div className="leaderboard-card-list-item-grid">
                                        <div className="leaderboard-flag text-dark bg-green"><strong>2</strong></div>
                                        <div className="leaderboard-media">
                                            <div className="leaderboard-media-content">
                                                <div className="leaderboard-media-content-title text-light">Jimmy Bob</div>
                                                <div className="leaderboard-media-content-username">@jimbob</div>
                                            </div>
                                        </div>
                                        <div className="text-left mt">
                                            <strong className="text-green">42</strong>
                                        </div>
                                    </div>
                                </li>
                                <li className="leaderboard-card-list-item">
                                    <div className="leaderboard-card-list-item-grid">
                                        <div className="leaderboard-flag text-dark bg-red"><strong>3</strong></div>
                                        <div className="leaderboard-media">
                                            <div className="leaderboard-media-content">
                                                <div className="leaderboard-media-content-title text-light">Axel Rose</div>
                                                <div className="leaderboard-media-content-username">@gunzundblumen</div>
                                            </div>
                                        </div>
                                        <div className="text-left mt">
                                            <strong className="text-red">39</strong>
                                        </div>
                                    </div>
                                </li>
                                <li className="leaderboard-card-list-item">
                                    <div className="leaderboard-card-list-item-grid">
                                        <div className="leaderboard-flag text-light"><strong>4</strong></div>
                                        <div className="leaderboard-media">
                                            <div className="leaderboard-media-content">
                                                <div className="leaderboard-media-content-title text-light">Jimmy Buffet</div>
                                                <div className="leaderboard-media-content-username">@whatwouldido</div>
                                            </div>
                                        </div>
                                        <div className="text-left mt">
                                            <strong className="text-light">34</strong>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Leaderboard;