function HandRankings() {
    return (
        <div id="handRankings">
            <h2>Hand Rankings</h2>
            <p>Not sure if you've got a good hand or not? Fear not, you can find all the information you need below. All hands are ranked from strongest to weakest.</p>
            <div class="handCombination">
                <h4 class="handCombinationTitle">Straight Flush</h4>
                Five cards in numerical order, all of identical suits.<br /><br />

                [PICTURE]<br /><br />

                In the event of a tie: Highest rank at the top of the sequence wins.<br /><br />

                The best possible straight flush is known as a royal flush, which consists of the ace, king, queen, jack and ten of a suit. A royal flush is an unbeatable hand.<br />
            </div>

            <div class="handCombination">
                <h4 class="handCombinationTitle">Four of a Kind</h4>
                Four cards of the same rank, and one side card or ‘kicker’.<br /><br />

                [PICTURE]<br /><br />

                In the event of a tie: Highest four of a kind wins. In community card games where players have the same four of a kind, the highest fifth side card ('kicker') wins.<br />
            </div>

            <div class="handCombination">
                <h4 class="handCombinationTitle">Full House</h4>
                Three cards of the same rank, and two cards of a different, matching rank.<br /><br />

                [PICTURE]<br /><br />

                In the event of a tie: Highest three matching cards wins the pot. In community card games where players have the same three matching cards, the highest value of the two matching cards wins.<br />
            </div>

            <div class="handCombination">
                <h4 class="handCombinationTitle">Flush</h4>
                Five cards of the same suit.<br /><br />

                [PICTURE]<br /><br />

                In the event of a tie: The player holding the highest ranked card wins. If necessary, the second-highest, third-highest, fourth-highest, and fifth-highest cards can be used to break the tie. If all five cards are the same ranks, the pot is split. The suit itself is never used to break a tie in poker.<br />
            </div>

            <div class="handCombination">
                <h4 class="handCombinationTitle">Straight</h4>
                Five cards in sequence.<br /><br />

                [PICTURE]<br /><br />

                In the event of a tie: Highest ranking card at the top of the sequence wins.<br /><br />

                Note: The Ace may be used at the top or bottom of the sequence, and is the only card which can act in this manner. A,K,Q,J,T is the highest (Ace high) straight; 5,4,3,2,A is the lowest (Five high) straight.<br />
            </div>

            <div class="handCombination">
                <h4 class="handCombinationTitle">Three of a kind</h4>
                Three cards of the same rank, and two unrelated side cards.<br /><br />

                [PICTURE]<br /><br />

                In the event of a tie: Highest ranking three of a kind wins. In community card games where players have the same three of a kind, the highest side card, and if necessary, the second-highest side card wins.<br />
            </div>

            <div class="handCombination">
                <h4 class="handCombinationTitle">Two pair</h4>
                Two cards of a matching rank, another two cards of a different matching rank, and one side card.<br /><br />

                [PICTURE]<br /><br />

                In the event of a tie: Highest pair wins. If players have the same highest pair, highest second pair wins. If both players have two identical pairs, highest side card wins.<br />
            </div>

            <div class="handCombination">
                <h4 class="handCombinationTitle">One pair</h4>
                Two cards of a matching rank, and three unrelated side cards.<br /><br />

                [PICTURE]<br /><br />

                In the event of a tie: Highest pair wins. If players have the same pair, the highest side card wins, and if necessary, the second-highest and third-highest side card can be used to break the tie.<br />
            </div>

            <div class="handCombination">
                <h4 class="handCombinationTitle">High card</h4>
                Any hand that does not qualify under a category listed above.<br /><br />

                [PICTURE]<br /><br />

                In the event of a tie: Highest card wins, and if necessary, the second-highest, third-highest, fourth-highest and smallest card can be used to break the tie.<br /><br />
            </div>

        </div>
    )
}

export default HandRankings