import Divider from '@mui/material/Divider'

function HandRankings() {
    return (
        <div id="handRankings">
            <h2>Hand Rankings</h2>
            <p>Not sure if you've got a good hand or not? Fear not, you can find all the information you need below. All hands are ranked from strongest to weakest.</p>
            <div className="handCombination">
                <h4 className="handCombinationTitle">Royal Flush</h4>
                The best possible straight flush is known as a royal flush, which consists of the ace, king, queen, jack and ten of a suit. A royal flush is an unbeatable hand. 
                Five cards in numerical order, all of identical suits.<br />

                <img className="handImage" src="https://cms.rationalcdn.com/v3/assets/blteecf9626d9a38b03/blt35765780bf3ff238/6144fb195c4bfe2d90de0817/royal-flush.png"></img><br />

                In the event of a tie: Highest rank at the top of the sequence wins.<br /><br />

               <br />
            </div>
            <Divider variant="middle" />
            <div className="handCombination">
                <h4 className="handCombinationTitle">Straight Flush</h4>
                Five cards in numerical order, all of identical suits.<br />

                <img className="handImage" src="https://cms.rationalcdn.com/v3/assets/blteecf9626d9a38b03/blt35d114a96b67f841/614502ef16efb2260172e779/straight-flush.png"></img><br />
                In the event of a tie: Highest rank at the top of the sequence wins.<br /><br />

                The best possible straight flush is a royal flush.<br />
            </div>
            <Divider variant="middle" />
            <div className="handCombination">
                <h4 className="handCombinationTitle">Four of a Kind</h4>
                Four cards of the same rank, and one side card or ‘kicker’.<br />

                <img className="handImage" src="https://cms.rationalcdn.com/v3/assets/blteecf9626d9a38b03/blt40b66d937d15f350/614502ee39dff133fc23e081/four-of-a-kind.png"></img><br />

                In the event of a tie: Highest four of a kind wins. In community card games where players have the same four of a kind, the highest fifth side card ('kicker') wins.<br />
            </div>
            <Divider variant="middle" />
            <div className="handCombination">
                <h4 className="handCombinationTitle">Full House</h4>
                Three cards of the same rank, and two cards of a different, matching rank.<br />

                <img className="handImage" src="https://cms.rationalcdn.com/v3/assets/blteecf9626d9a38b03/blt8efe020f38889830/614502eec8dedf25e93056e4/full-house.png"></img><br />

                In the event of a tie: Highest three matching cards wins the pot. In community card games where players have the same three matching cards, the highest value of the two matching cards wins.<br />
            </div>
            <Divider variant="middle" />
            <div className="handCombination">
                <h4 className="handCombinationTitle">Flush</h4>
                Five cards of the same suit.<br />

                <img className="handImage" src="https://cms.rationalcdn.com/v3/assets/blteecf9626d9a38b03/bltf82cf19b0258c081/614502ed9850ce2a8433a54f/flush.png"></img><br />

                In the event of a tie: The player holding the highest ranked card wins. If necessary, the second-highest, third-highest, fourth-highest, and fifth-highest cards can be used to break the tie. If all five cards are the same ranks, the pot is split. The suit itself is never used to break a tie in poker.<br />
            </div>
            <Divider variant="middle" />
            <div className="handCombination">
                <h4 className="handCombinationTitle">Straight</h4>
                Five cards in sequence.<br />

                <img className="handImage" src="https://cms.rationalcdn.com/v3/assets/blteecf9626d9a38b03/blt16a8c3d876135246/614502ed4df7dd6b5acfdc75/straight.png"></img><br />

                In the event of a tie: Highest ranking card at the top of the sequence wins.<br /><br />

                Note: The Ace may be used at the top or bottom of the sequence, and is the only card which can act in this manner. A,K,Q,J,T is the highest (Ace high) straight; 5,4,3,2,A is the lowest (Five high) straight.<br />
            </div>
            <Divider variant="middle" />
            <div className="handCombination">
                <h4 className="handCombinationTitle">Three of a kind</h4>
                Three cards of the same rank, and two unrelated side cards.<br />

                <img className="handImage" src="https://cms.rationalcdn.com/v3/assets/blteecf9626d9a38b03/blt8ae3dd56cd2fb930/614502ec5c87bc24806a59a4/three-of-a-kind.png"></img><br />

                In the event of a tie: Highest ranking three of a kind wins. In community card games where players have the same three of a kind, the highest side card, and if necessary, the second-highest side card wins.<br />
            </div>
            <Divider variant="middle" />
            <div className="handCombination">
                <h4 className="handCombinationTitle">Two pair</h4>
                Two cards of a matching rank, another two cards of a different matching rank, and one side card.<br />

                <img className="handImage" src="https://cms.rationalcdn.com/v3/assets/blteecf9626d9a38b03/bltcac4c3d27027b01f/614502ecb13be0646834fdfb/two-pair.png"></img><br />

                In the event of a tie: Highest pair wins. If players have the same highest pair, highest second pair wins. If both players have two identical pairs, highest side card wins.<br />
            </div>
            <Divider variant="middle" />
            <div className="handCombination">
                <h4 className="handCombinationTitle">One pair</h4>
                Two cards of a matching rank, and three unrelated side cards.<br />

                <img className="handImage" src="https://cms.rationalcdn.com/v3/assets/blteecf9626d9a38b03/blt736655fa9157ac8d/614502ebace2f026595a0927/pair.png"></img><br />

                In the event of a tie: Highest pair wins. If players have the same pair, the highest side card wins, and if necessary, the second-highest and third-highest side card can be used to break the tie.<br />
            </div>
            <Divider variant="middle" />
            <div className="handCombination">
                <h4 className="handCombinationTitle">High card</h4>
                Any hand that does not qualify under a category listed above.<br />

                <img className="handImage" src="https://cms.rationalcdn.com/v3/assets/blteecf9626d9a38b03/bltaf235dc16642e84b/614502eb6201a52010fc76f6/high-card.png"></img><br />

                In the event of a tie: Highest card wins, and if necessary, the second-highest, third-highest, fourth-highest and smallest card can be used to break the tie.<br /><br />
            </div>

        </div>
    )
}

export default HandRankings