import VoteReasons from './VoteReasons';
import { VoteWithLikes } from '../lib/types/VoteWithLikes';

interface VoteListProps {
  votes: VoteWithLikes[];
}

export const VoteList: React.FC<VoteListProps> = ({ votes }) => {
  return (
    <div className="md:max-w-xl sm:max-w-full">
      {votes.map(vote => (
        <VoteReasons
          key={vote.id}
          votes={vote.votes}
          address={vote.voter.id}
          isFor={vote.supportDetailed}
          reason={vote.reason}
          block={vote.blockNumber}
          proposalTitle={vote.proposal.title}
          proposalId={vote.proposal.id}
          nounHolderLikes={vote.nounHolderLikes}
          nonNounHolderLikes={vote.nonNounHolderLikes}
        />
      ))}
    </div>
  );
};
